import os
import shutil
import subprocess
import sys

TEMPLATES_DIR = "templates"
PROJECTS_DIR = "dev"

def create_project():
    project_name = input("Enter your project name: ").strip()

    if not project_name:
        print("Project name cannot be empty!")
        return

    project_path = os.path.join(PROJECTS_DIR, project_name)

    if os.path.exists(project_path):
        print(f"Project '{project_name}' already exists!")
        return

    os.makedirs(project_path)

    # Copy React template
    frontend_path = os.path.join(project_path, "frontend")
    shutil.copytree(os.path.join(TEMPLATES_DIR, "react-template"), frontend_path)

    # Copy Django template
    backend_path = os.path.join(project_path, "backend")
    shutil.copytree(os.path.join(TEMPLATES_DIR, "django-template"), backend_path)

    print(f"✅ Project '{project_name}' created successfully!")

    # Setup Frontend (React)
    print("\n⚡ Setting up Frontend...")
    node_modules_path = os.path.join(frontend_path, "node_modules")
    package_lock_path = os.path.join(frontend_path, "package-lock.json")

    if os.path.exists(node_modules_path):
        shutil.rmtree(node_modules_path)
    if os.path.exists(package_lock_path):
        os.remove(package_lock_path)

    subprocess.run(["npm", "install"], cwd=frontend_path, check=True)
    subprocess.Popen(["npm", "start"], cwd=frontend_path)

    # Setup Backend (Django)
    print("\n⚡ Setting up Backend...")
    subprocess.run(["python", "-m", "venv", "venv"], cwd=backend_path, check=True)
    venv_activate = f"source {os.path.join(backend_path, 'venv', 'bin', 'activate')}"

    # Install pip inside virtual environment
    subprocess.run(["curl", "-o", "get-pip.py", "https://bootstrap.pypa.io/get-pip.py"], cwd=backend_path, check=True)
    subprocess.run(["python", "get-pip.py"], cwd=backend_path, check=True)

    # Install Django dependencies
    subprocess.run([f". {venv_activate} && pip install -r requirements.txt"], cwd=backend_path, shell=True, check=True)

    # Start Django server
    subprocess.Popen([f"{venv_activate} && python manage.py runserver"], cwd=backend_path, shell=True)

    print("\n🚀 Your project is running! Frontend on React and Backend on Django!")

if __name__ == "__main__":
    create_project()
