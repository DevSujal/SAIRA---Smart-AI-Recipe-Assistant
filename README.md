
# SAIRA - Smart AI Recipe Assistant

**SAIRA (Smart AI Recipe Assistant)** is an AI-driven recipe recommendation system designed to provide personalized recipe suggestions based on user preferences. Built entirely with Next.js for both backend and frontend, SAIRA integrates a Python-based recommendation engine through JavaScript using the `child_process` module, enhancing user experience with an interactive and responsive design.

## 📜 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## 🌟 Features
- **AI-Powered Recipe Recommendations:** Uses a TF-IDF model to recommend recipes based on user preferences.
- **Interactive Recipe Interface:** Engaging UI that lets users browse, select, and explore various recipes.
- **Dynamic Recipe Image Generation:** Automatically generates unique recipe images for a more immersive experience.
- **Speech Recognition Integration:** Allows voice input for an enhanced user experience.

## 🛠 Tech Stack
- **Frontend & Backend:** Next.js
- **Machine Learning:** TF-IDF, Cosine Similarity, Natural Language Processing (NLP)
- **Database:** MongoDB
- **APIs:** Hugging Face API for dynamic image generation
- **Script Integration:** Python recommendation script executed through JavaScript using `child_process`

## 🚀 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DevSujal/an-intelligent-system-for-receipe-assistance-using-artificial-intelligence.git
   cd an-intelligent-system-for-receipe-assistance-using-artificial-intelligence
   ```

2. **Install Dependencies:**
   - For the Next.js application:
     ```bash
     npm install
     ```
   - For the Python environment:
     ```bash
     cd backend
     python -m venv myenv
     source myenv/bin/activate
     pip install -r requirements.txt
     ```

3. **Set Up API Keys:**  
   Create a `.env` file in the project root and add your Hugging Face API key:
   ```plaintext
   HUGGING_FACE_API_KEY=your_huggingface_api_key
   ```

4. **Run the Application:**
   ```bash
   # Start the Next.js server
   npm run dev
   ```

5. **Run the Python Script:**  
   In a separate terminal, activate your Python virtual environment and start the recommendation script:
   ```bash
   cd backend
   source myenv/bin/activate
   python recipe_recommendation.py
   ```

## 💡 Usage
1. **Visit the Application:** Navigate to `http://localhost:3000` in your browser.
2. **Get Recipe Recommendations:** Input your preferences, and SAIRA will suggest recipes tailored to your tastes.
3. **Voice Commands:** Try using voice input for a hands-free experience.
4. **View Recipe Details:** Click on a recommended recipe to see details, including ingredients and steps.

## 🌐 API Integration
SAIRA uses the Hugging Face API to generate unique images for each recipe dynamically. The Python script leverages the TF-IDF model and cosine similarity for accurate recipe recommendations based on user input.

## 🤝 Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, open an issue to discuss potential improvements.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements
- [Next.js](https://nextjs.org/) for the frontend framework.
- [Hugging Face](https://huggingface.co/) for dynamic image generation.
- [MongoDB](https://www.mongodb.com/) for database support.
