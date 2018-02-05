/***************************************************************************
 * NameEntry.h  -  Object to store name data for a single name
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
#ifndef NAMEENTRY_H
#define NAMEENTRY_H
#include <string>
#include <vector>

using namespace std;

class NameEntry {
public:
    NameEntry();
    string word; // the word
    string line; // vector to hold line numbers
private:

};

#endif /* NAMEENTRY_H */

