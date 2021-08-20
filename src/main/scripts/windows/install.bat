@ECHO OFF

setlocal ENABLEEXTENSIONS

@ECHO Detecting Java version installed.
:CHECK_JAVA
for /f tokens^=2-5^ delims^=.-_^" %%j in ('java -fullversion 2^>^&1') do set "jver=%%j%%k"
@ECHO CurrentVersion %jver%

if %jver% NEQ 110 GOTO JAVA_NOT_INSTALLED

:JAVA_INSTALLED

@ECHO Java 11 found!
@ECHO Installing ${pkg.name} ...

SET BASE=%~dp0

"%BASE%"${pkg.name}.exe install

@ECHO DONE.

GOTO END

:JAVA_NOT_INSTALLED
@ECHO Java 11 is not installed. Only Java 11 is supported
@ECHO Please go to https://adoptopenjdk.net/index.html and install Java 11. Then retry installation.
PAUSE
GOTO END

:END


