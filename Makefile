#MakeFile to build and deploy the Sample US CENSUS Name Data using ajax
# For CSC3004 Software Development

# Put your user name below:
USER= shebar1

CC= g++

#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: main PutCGI PutHTML

NameEntry.o: NameEntry.cpp NameEntry.h
	$(CC) $(CFLAGS) NameEntry.cpp -c
#you're doing a great job
NameMap.o: NameMap.cpp NameMap.h NameEntry.h
	$(CC) $(CFLAGS) NameMap.cpp -c

main.o: main.cpp NameEntry.h NameMap.h
	$(CC) $(CFLAGS) main.cpp -c

main: main.o NameEntry.o NameMap.o
	$(CC) $(CFLAGS) main.o NameEntry.o NameMap.o -o main -L/usr/local/lib -lcgicc

PutCGI: main
	chmod 757 main
	cp main /usr/lib/cgi-bin/$(USER)_main.cgi 

	echo "Current contents of your cgi-bin directory: "
	ls -l /usr/lib/cgi-bin/

PutHTML:
	cp index.html /var/www/html/class/softdev/$(USER)/shaxMap/
	cp main.css /var/www/html/class/softdev/$(USER)/shaxMap/
	cp script.js /var/www/html/class/softdev/$(USER)/shaxMap/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/shaxMap/
clean:
	rm -f *.o  main
