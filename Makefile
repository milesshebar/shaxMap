# MakeFile to build the Sample US CENSUS Name Data lookup program 
# For CSC3004 Software Development
# C++ compiler to use
CC= g++

#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: main

NameEntry.o: NameEntry.cpp NameEntry.h
	$(CC) $(CFLAGS) NameEntry.cpp -c

NameMap.o: NameMap.cpp NameMap.h NameEntry.h
	$(CC) $(CFLAGS) NameMap.cpp -c

main.o: main.cpp NameEntry.h NameMap.h
	$(CC) $(CFLAGS) main.cpp -c

main: main.o NameEntry.o NameMap.o
	$(CC) $(CFLAGS) main.o NameEntry.o NameMap.o -o main

clean:
	rm -f *.o  main
