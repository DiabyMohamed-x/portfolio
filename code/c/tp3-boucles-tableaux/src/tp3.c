#include "../../lib/inout.h"

#define BOOL int
#define TRUE 1
#define FALSE 0

void carre(int n) {
    for (int ligne = 0; ligne < n; ligne++) {
        for (int colonne = 0; colonne < n; colonne++) {
            ecrireString("*");
        }
        ecrireSautDeLigne();
    }
}

void triangle(int n) {
    for (int ligne = 1; ligne <= n; ligne++) {
        for (int colonne = 0; colonne < ligne; colonne++) {
            ecrireString("*");
        }
        ecrireSautDeLigne();
    }
}

void afficheTableau(int t[], int n) {
    for (int i = 0; i < n; i++) {
        ecrireInt(t[i]);
        ecrireString(" ");
    }
    ecrireSautDeLigne();
}

BOOL estPresent(int t[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (t[i] == x) {
            return TRUE;
        }
    }
    return FALSE;
}

int nombreOccurrence(int t[], int n, int x) {
    int compteur = 0;
    for (int i = 0; i < n; i++) {
        if (t[i] == x) {
            compteur++;
        }
    }
    return compteur;
}

int minimum(int t[], int n) {
    int min = t[0];
    for (int i = 1; i < n; i++) {
        if (t[i] < min) {
            min = t[i];
        }
    }
    return min;
}

int maximum(int t[], int n) {
    int max = t[0];
    for (int i = 1; i < n; i++) {
        if (t[i] > max) {
            max = t[i];
        }
    }
    return max;
}

double moyenne(int t[], int n) {
    int somme = 0;
    for (int i = 0; i < n; i++) {
        somme += t[i];
    }
    return (double)somme / n;
}

BOOL estTrie(int t[], int n) {
    for (int i = 1; i < n; i++) {
        if (t[i - 1] > t[i]) {
            return FALSE;
        }
    }
    return TRUE;
}

void decalage(int t[], int n) {
    int premier = t[0];
    for (int i = 0; i < n - 1; i++) {
        t[i] = t[i + 1];
    }
    t[n - 1] = premier;
}

int main(void) {
    int valeurs[] = {1, 2, 3, 4, 2};
    int taille = 5;

    carre(4);
    triangle(4);
    afficheTableau(valeurs, taille);

    ecrireString("2 present ? ");
    ecrireInt(estPresent(valeurs, taille, 2));
    ecrireSautDeLigne();
    ecrireString("occurrences de 2 : ");
    ecrireInt(nombreOccurrence(valeurs, taille, 2));
    ecrireSautDeLigne();
    ecrireString("minimum : ");
    ecrireInt(minimum(valeurs, taille));
    ecrireSautDeLigne();
    ecrireString("maximum : ");
    ecrireInt(maximum(valeurs, taille));
    ecrireSautDeLigne();
    ecrireString("moyenne : ");
    ecrireDouble(moyenne(valeurs, taille));
    ecrireSautDeLigne();
    ecrireString("tableau trie ? ");
    ecrireInt(estTrie(valeurs, taille));
    ecrireSautDeLigne();

    decalage(valeurs, taille);
    afficheTableau(valeurs, taille);
    return 0;
}
