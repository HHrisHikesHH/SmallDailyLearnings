# 🚀 Django JWT Authentication Setup

Welcome, fellow developer! 🧑‍💻 Ready to conquer the world of authentication with JWT in Django? Buckle up because we're diving into the mystical realm of **JSON Web Tokens (JWTs)**!! 🔥

---

## 📌 What is JWT and Why Should You Care? 🤔

JWT (JSON Web Token) is like a VIP pass for users in your app. Once they log in, they get a special **token** that allows them access to restricted areas (like your cool APIs). No need for session storage or cookies—just pure token-based authentication goodness! 🎫

---

## 🛠️ Prerequisites

Before we start, ensure you have:
- **Python** (>=3.8) 🐍
- **Django** (>=3.2) 🏗️
- **Django REST Framework (DRF)** 📡
- **djangorestframework-simplejwt** (for handling JWTs) 🔐

---

## 📥 Installation & Setup

First, install the required dependencies:
```sh
pip install djangorestframework djangorestframework-simplejwt django-cors-headers
```

Now, add them to your `settings.py`:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',  # For handling CORS issues
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

Set up JWT authentication in `settings.py`:
```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```

---

## 🔐 Setting Up Authentication APIs

### 📝 User Registration API (Signup)
```python
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth.models import User

@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```
✅ **What does it do?**
- Accepts `username`, `password`, and other details.
- Creates a new user.
- Returns the user details upon successful signup.

### 🔑 User Login API (Token Generation)
```python
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def login_user(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)
    
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
```
✅ **What does it do?**
- Verifies user credentials.
- Generates an **access token** (short-lived) and a **refresh token** (longer-lived).
- Sends these tokens to the frontend for authentication.

---

## ⚡ Using JWT in Requests

### 📤 Sending Tokens in API Requests
Once logged in, use the **access token** in the `Authorization` header for protected endpoints:
```sh
GET /api/protected-resource/
Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
```

### 🔄 Refreshing the Access Token
When the access token expires, use the **refresh token** to get a new one:
```sh
POST /api/token/refresh/
Body:
  {
    "refresh": "YOUR_REFRESH_TOKEN"
  }
```

---

## 🛠️ Debugging Common Issues

❌ **CORS Policy Errors?**
👉 Add this to `settings.py`:
```python
CORS_ALLOW_ALL_ORIGINS = True  # Allow all origins (for dev only)
CORS_ALLOW_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
CORS_ALLOW_HEADERS = ['content-type', 'authorization', 'accept', 'x-requested-with']
```

❌ **Invalid Credentials?**
👉 Ensure the username and password are correct.

❌ **Tokens Not Working?**
👉 Ensure the frontend sends the token in the `Authorization` header as `Bearer TOKEN_HERE`.

---

## 🎉 Congrats, You Did It!

You’ve successfully implemented JWT authentication in Django! 🏆 Now, your API is protected, and only authorized users can access it. 🚀

🔗 **Next Steps:**
- Secure your API further by implementing **token expiration and blacklist**.
- Store tokens safely (e.g., **httpOnly cookies** instead of localStorage).
- Build a frontend that interacts with this authentication system!

💡 **Happy coding!** 🧑‍💻🔥

