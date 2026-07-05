package com.library.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.library.service.BookService.*(..))")
    public void logBeforeMethod(JoinPoint joinPoint) {
        System.out.println("[AOP LOGGER - BEFORE] Entering method: " 
                + joinPoint.getSignature().getDeclaringTypeName() + "." 
                + joinPoint.getSignature().getName());
    }

    @After("execution(* com.library.service.BookService.*(..))")
    public void logAfterMethod(JoinPoint joinPoint) {
        System.out.println("[AOP LOGGER - AFTER] Exiting method: " 
                + joinPoint.getSignature().getDeclaringTypeName() + "." 
                + joinPoint.getSignature().getName());
    }

    @Around("execution(* com.library.service.BookService.*(..)) || execution(* com.library.repository.BookRepository.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();

        Object result = joinPoint.proceed();

        long elapsedTime = System.currentTimeMillis() - startTime;
        System.out.println("[AOP LOGGER - AROUND] Execution of " 
                + joinPoint.getSignature().getDeclaringTypeName() + "." 
                + joinPoint.getSignature().getName() 
                + " took " + elapsedTime + " ms.");

        return result;
    }
}
