# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
ARG DJANGO_ENVIRONMENT
ENV DJANGO_ENVIRONMENT local
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/