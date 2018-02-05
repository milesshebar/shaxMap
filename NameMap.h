/***************************************************************************
 * NameMap.h - Object to store a map of all names and data about that name
 *
 * copyright : (C) 2018 by Jim Skon, Kenyon College
 *
 * This is part of a program create an index US Census name
 * Data on the frequency of names in response to requestes.  
 * It then allows you to look up any name, giving the 10 closest matches
 * 
 * 
 *
 ***************************************************************************/
#ifndef NAMEMAP_H
#define NAMEMAP_H
#include <sys/stat.h>
#include <iostream>
#include <fstream>
#include <map>
#include <algorithm>
#include <string>
#include <vector>
#include <sstream>
#include <istream>
#include "NameEntry.h"

using namespace std;


class NameMap {
public:
    NameMap(string filename);
    bool NameMapSuccess();
    vector<NameEntry> getMatches(string name);
    vector<int> indexSearch(string word);
    int getSize();
    vector<string> lines;
    

private:
    map <string, vector<int> > nameMap;
    string word, line;
};




#endif /* NAMEMAP_H */

