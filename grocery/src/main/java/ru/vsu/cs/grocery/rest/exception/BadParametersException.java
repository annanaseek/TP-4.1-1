package ru.vsu.cs.grocery.rest.exception;

public class BadParametersException extends RuntimeException{

    public BadParametersException(String message) {
        super(message);
    }
}
