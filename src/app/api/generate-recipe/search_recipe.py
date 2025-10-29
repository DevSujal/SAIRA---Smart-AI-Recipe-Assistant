import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import os
import sys
import json
import gzip

# Load the TF-IDF model and matrix
script_dir = os.path.dirname(__file__)
model_path = os.path.join(script_dir, 'tfidf_model.pkl')
matrix_path = os.path.join(script_dir, 'tfidf_matrix.pkl')
csv_path = os.path.join(script_dir, 'RAW_recipes.csv')
csv_gz_path = os.path.join(script_dir, 'RAW_recipes.csv.gz')

with open(model_path, 'rb') as file:
    loaded_tfidf = pickle.load(file)

with open(matrix_path, 'rb') as file:
    loaded_tfidf_matrix = pickle.load(file)

# Load the recipe DataFrame (try compressed first, fallback to uncompressed)
if os.path.exists(csv_gz_path):
    # Use stderr for debug messages so they don't interfere with JSON output
    print(f"Loading compressed CSV: {csv_gz_path}", file=sys.stderr)
    with gzip.open(csv_gz_path, 'rt', encoding='ISO-8859-1') as f:
        df_subset = pd.read_csv(f)
elif os.path.exists(csv_path):
    print(f"Loading uncompressed CSV: {csv_path}", file=sys.stderr)
    df_subset = pd.read_csv(csv_path, encoding='ISO-8859-1')
else:
    raise FileNotFoundError(f"Neither {csv_gz_path} nor {csv_path} found")

# Clean the DataFrame
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

# Get user input from command line arguments
user_input = sys.argv[1]  # First argument is the user input

# Search for recipes based on user input
recommended_recipes = search_recipes(user_input)

# Convert the recommended recipes DataFrame to a JSON format and print
print(recommended_recipes.to_json(orient="records"))
