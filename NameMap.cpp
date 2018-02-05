/***************************************************************************
 * NameMap.cpp - Object to store a map of all names and data about that name, 
 * and allow insertion and and looking up of names.
 *
 * copyright : (C) 2018 by Jim Skon, Kenyon College
 *
 * This is part of a program create an index US Census name
 * Data on the frequency of names in response to requestes.  
 * It then allows you to look up any name, giving the 10 closest matches
 * 
 ***************************************************************************/
#include "NameMap.h"
#include "wordStem/english_stem.h"

NameMap::NameMap(string filename) {
	stemming::english_stem<char, std::char_traits<char> > StemEnglish;
    NameEntry nameData;
    ifstream infile(filename);
    int position = 0;
    
    
    
    while(!infile.fail()) {
    	
    	getline(infile, line); //get next line
    	lines.push_back(line); // push entire line into lines vector for later use
    	istringstream lineStream(line); //make sstream of entire line
    	
    	while(lineStream >> word) { //parse each word in each line
    		transform(word.begin(), word.end(), word.begin(), ::toupper);
    		StemEnglish(word); //stem it
    		nameMap[word].push_back(position); //push newly stemmed word and line position into map
    	}
    	
    	
    	position++;
    	
    }
    
}

int NameMap::getSize() {
	return nameMap.size();

}


vector <int> NameMap::indexSearch(string word) {
     map<string, vector<int> >::iterator it;  // iterator for find                                                                
     vector<int> blank; // return for no matches                                                                                  
    it = nameMap.find(word);
    if (it == nameMap.end()) {
         return(blank);
    }
    else {
        return (nameMap[word]);
    }
}


