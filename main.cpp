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

using namespace std;

const string shaxFile = "Shakespeare.txt";
NameMap shaxMap(shaxFile); //parse Shakespeare file into map structure


void printLines(vector<string> v, vector<int> x); //function to print lines to screen

stemming::english_stem<char, std::char_traits<char> > StemEnglish; //stem stuff

int main() {
	char yesno;
	cout << "\033[1;31mThis program finds all occurrences of a given word in the Shakespearean canon.\033[0m\n";
    
    do {
    	string keyWord = "";
    	cout << "Enter a word to search for: ";
    	cin >> keyWord;
    	cout << endl;
    	cout << "Searching for all instances of " << "\e[1m" + keyWord + "\e[0m" << " in Shakespeare..." << endl << endl;
    	transform(keyWord.begin(), keyWord.end(), keyWord.begin(), ::toupper);
		StemEnglish(keyWord);
    	vector <int> current = shaxMap.indexSearch(keyWord); //constructs vector of line numbers with words matching result
		printLines(shaxMap.lines, current); //print lines to screen
		cout << "\033[1mWould you like to run this program again with a different word? (y/n) \033[0m\n";
		cin >> yesno;
    }
        
    while(yesno == 'y');
    
	return 0;
}

void printLines(vector<string> v, vector<int> x) {
	for (int i = 0; i < x.size(); i++) {
		cout << v[x[i]] << endl;
	
	}

}