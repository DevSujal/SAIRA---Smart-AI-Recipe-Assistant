import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load the TF-IDF model and matrix
with open('tfidf_model.pkl', 'rb') as file:
    loaded_tfidf = pickle.load(file)

with open('tfidf_matrix.pkl', 'rb') as file:
    loaded_tfidf_matrix = pickle.load(file)

# Load the recipe DataFrame (ensure you have this data available)
df_subset = pd.read_csv('RAW_recipes.csv', encoding='ISO-8859-1')

# Clean the DataFrame as done previously
df_subset['tags'] = df_subset['tags'].apply(lambda x: ' '.join(x.strip('[]').replace("'", "").split(',')))
df_subset['ingredients'] = df_subset['ingredients'].apply(lambda x: ' '.join(x.strip('[]').replace("'", "").split(',')))

# Define a function to search for recipes
def search_recipes(user_input, top_n=10):
    # Transform the user input using the loaded TF-IDF vectorizer
    user_tfidf = loaded_tfidf.transform([user_input])
    
    # Calculate cosine similarity between user input and the loaded TF-IDF matrix
    user_similarity = cosine_similarity(user_tfidf, loaded_tfidf_matrix)
    
    # Get similarity scores
    similarity_scores = user_similarity.flatten()
    
    # Get the top N indices based on similarity scores
    top_indices = similarity_scores.argsort()[-top_n:][::-1]
    
    # Retrieve the top similar recipes
    top_similar_recipes = df_subset.iloc[top_indices]
    top_similar_scores = similarity_scores[top_indices]
    
    # Create a result DataFrame
    result = pd.DataFrame({
        'Recipe Name': top_similar_recipes['name'],
        'Similarity Score': top_similar_scores
    })
    
    return result

# Example user input
user_input = input("Enter the ingredients or recipe description: ")

# Search for recipes based on user input
recommended_recipes = search_recipes(user_input)

# Display the recommended recipes
print(recommended_recipes)
