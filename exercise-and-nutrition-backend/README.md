# Exercise and Nutrition Backend

Welcome to the Exercise and Nutrition Backend, built with Python and Flask! This backend serves as the server-side component for the Exercise and Nutrition Guide.

## Getting Started

Follow these instructions to set up and run the backend on your local machine.

### Prerequisites

Before you begin, make sure you have Python and pip installed on your machine.

- **Python:** [Download and Install Python](https://www.python.org/downloads/)
- **pip:** (Included with Python by default)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/DAQ-exercise-and-nutrition/exercise-and-nutrition-backend.git
   ```

2. Change into the project directory:

   ```bash
   cd exercise-and-nutrition-backend
   ```

3. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   ```

4. Activate the virtual environment:

   - On Windows:

     ```bash
     .\venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

5. Install dependencies:

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

### Learn More

To learn more about Flask, check out the [Flask documentation](https://flask.palletsprojects.com/).

## License

This project is licensed under the [MIT License](LICENSE).
