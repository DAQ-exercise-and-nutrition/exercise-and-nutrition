# A GUIDE TO EXERCISE AND NUTRITION

## Background

The primary objective of the API is to provide personalized exercise and nutrition guidance. It caters to individuals aiming to build muscle, lose weight, or achieve specific fitness goals. With the growing focus on health and fitness, there's a need for accurate, tailored advice. This API leverages diverse data sources to offer reliable recommendations on exercise routines and nutritional intake.

## Motivation

With the increasing emphasis on health and fitness, the demand for accurate and personalized advice is on the rise. This API addresses this need by utilizing various data sources to deliver reliable recommendations for exercise routines and nutritional intake.

## Team members

|  No.  | Student ID | First name  | Last name  | Field | Faculty   | University   |
|---|---|---|---|---|---|---|
| 1 | 6410546114 | Jirasak | Tumbal  | Software and knowledge engineering  | Engineering  | Kasetsart University  |
| 2 | 6410545771 | Warat  | Poovorakit | Software and knowledge engineering  | Engineering  | Kasetsart University  |
| 3 | 6410545762 | Navathon   | Limamapar | Software and knowledge engineering  | Engineering  | Kasetsart University  |
| 4 | 6410546319 | Setthanan  | Thongpanchang | Software and knowledge engineering  | Engineering  | Kasetsart University  |



## Project overview and features

1. User Profile Cards: Each card contains an avatar, along with details such as gender, age, weight, height, fitness goal, target body part, fitness level, and basal metabolic rate (BMR). The cards have a 'Analyze' button, suggesting interactivity for further analysis or recommendations
2. Exercise Recommendation Panel: This section pops up when a user's 'Analyze' button is clicked. It provides a customized exercise plan with the number of sets, repetitions, and rest time. Specific exercises are listed with icons, indicating the body part targeted and the equipment needed. It also includes weightlifting and stretching advice.
3. Food Recommendation Panel: Corresponding to the exercise panel, this area offers dietary advice with nutritional focus, such as low-carb and low-fat options. It suggests a frequency for cardio exercises and lists recipes with their caloric content and macronutrient breakdown.
4. General Exercise Database: A collection of exercises is displayed, each with a specific focus on a body part, the required equipment, and the exercise target. This database appears to be searchable, allowing users to find exercises tailored to their needs.
5. Food Database: Similar to the exercise database, a variety of foods are listed with their caloric values and meal types. The diet type is also specified, indicating if the meal is balanced or fits other dietary requirements.

## Overall Architecture
<img width="1330" alt="Screenshot 2566-11-29 at 00 46 51" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/ac575683-c8a5-4d7c-8fae-3b5772cc3e8b">


## Data sharing

- Users
<img width="666" alt="Screenshot 2566-11-29 at 00 51 58" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/c689a6e4-7bda-4000-b00e-12d34a46968e">

- Exercises
<img width="680" alt="Screenshot 2566-11-29 at 00 52 30" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/307a29b8-0878-464b-bce8-a1f75b01b80f">

- Foods
<img width="674" alt="Screenshot 2566-11-29 at 00 52 45" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/b4481bbd-4ca0-4d57-9b2b-ef892eab08f4">

- Reps/set
<img width="671" alt="Screenshot 2566-11-29 at 00 53 03" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/6ee2ba22-886e-4424-8923-ad3b6ea74110">

- Nutritions
<img width="673" alt="Screenshot 2566-11-29 at 00 53 16" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/5481c36d-7fe0-4276-a8aa-925c56747c08">

## Prerequisites

Before getting started with the A Guide to Exercise and Nutrition project, ensure you have the following prerequisites installed:

- **Node.js:** [Download and Install Node.js](https://nodejs.org/)
- **npm:** [npm Installation Guide](https://docs.npmjs.com/getting-started/installing-node)
- **Python:** [Download and Install Python](https://www.python.org/downloads/)
- **pip:** (Included with Python by default)

## Getting Started

1. Create database schema following CSV file in data folder.
   
   <img width="1172" alt="Screenshot 2566-11-29 at 01 03 24" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/d31db27a-1aba-4bca-af24-4b38a0e77a34">

2. Load CSV into Table of database.

   <img width="567" alt="Screenshot 2566-11-29 at 01 07 19" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/e8e06b9f-f77a-4a3a-bb5f-706301f429e4">

  
3. Put column name following CSV file.
   
   <img width="636" alt="Screenshot 2566-11-29 at 01 05 42" src="https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition/assets/92836354/2851982f-2815-4af6-b590-8aa770453c9f">

### Installation

Clone the repository

   ```bash
   git clone https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition.git
   ```


### Backend Installation

1. Change into the project directory:

   ```bash
   cd exercise-and-nutrition-backend
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:

     ```bash
     .\venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

### Configuration

Edit the `config.py` file with your database connection details, and any other necessary configurations.

### Running the Backend

Now that you have installed the dependencies and configured the backend, you can run it locally.

```bash
python app.py
```

The backend will start, and you can access the API at `http://127.0.0.1:8080/exercise-and-nutrition-api/v3`.

### API Documentation

For detailed information on the API endpoints and usage, refer to the API documentation.

Put `exercise-and-nutrition-api.yaml` in here [swagger editor](https://editor.swagger.io/)


### Frontend Installation

1. Change into the project directory:

   ```bash
   cd exercise-and-nutrition-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

Now that you have installed the dependencies, you can run the app locally.

```bash
npm start
```

This command starts the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the Exercise and Nutrition Guide.


## License

This project is licensed under the [MIT License](LICENSE).
