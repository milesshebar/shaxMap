/***************************************************************************
 * This program was created by Miles Shebar for Software Development
 * Kenyon College, Spring 2018 - Proj. 1 Part 1
 *
 * shakespeare_cpp  -  This console program builds an inverted index of
 * Shakespeare's work and stores it in a searchable map data structure.
 *  
 *
 ***************************************************************************/
#include <stdlib.h>
#include <sys/stat.h>
#include <iostream>
#include <fstream>
#include <map>
#include <algorithm>
#include "NameMap.h"
#include "NameEntry.h"
#include "wordStem/english_stem.h"

// Stuff for AJAX
#include "cgicc/Cgicc.h"
#include "cgicc/HTTPHTMLHeader.h"
#include "cgicc/HTMLClasses.h"

#define XML_USE_STL

using namespace std;
using namespace cgicc; // Needed for AJAX functions.

const string path = "/home/class/SoftDev/Shakespeare/";
const string shaxFile = path+"Shakespeare.txt";
NameMap shaxMap(shaxFile); //parse Shakespeare file into map structure


void printLines(vector<string> v, vector<int> x); //function to print lines to screen

stemming::english_stem<char, std::char_traits<char> > StemEnglish; //stem stuff

// Object used for receiving AJAX call (and getting parameters)



int main() {
	
    	Cgicc cgi;    // Ajax object
    	form_iterator itword = cgi.getElement("word");
    	string keyWord = **itword;
    	transform(keyWord.begin(), keyWord.end(), keyWord.begin(), ::toupper);
		StemEnglish(keyWord);
    	vector <int> current = shaxMap.indexSearch(keyWord); //constructs vector of line numbers with words matching result
		printLines(shaxMap.lines, current); //print lines to screen
    
  
	return 0;
}

void printLines(vector<string> v, vector<int> x) {
	
	cout << "Content-Type: text/plain\n\n";
	
	for (int i = 0; i < x.size(); i++) {
		cout << v[x[i]] << "<br>" << endl;
	
	}

}