#include "../../lib/inout.h"
#include <string.h>

#define BOOL int
#define TRUE 1
#define FALSE 0

int ligne(int t[3][3], int i) {
    return t[i][0] + t[i][1] + t[i][2];
}

int colonne(int t[3][3], int j) {
    return t[0][j] + t[1][j] + t[2][j];
}

int diagonale1(int t[3][3]) {
    return t[0][0] + t[1][1] + t[2][2];
}

int diagonale2(int t[3][3]) {
    return t[0][2] + t[1][1] + t[2][0];
}

BOOL magique(int t[3][3]) {
    int reference = ligne(t, 0);
    for (int i = 0; i < 3; i++) {
        if (ligne(t, i) != reference || colonne(t, i) != reference) {
            return FALSE;
        }
    }
    return diagonale1(t) == reference && diagonale2(t) == reference;
}

int tailleMax(char *mots[], int taille) {
    int max = 0;
    for (int i = 0; i < taille; i++) {
        int longueur = strlen(mots[i]);
        if (longueur > max) {
            max = longueur;
        }
    }
    return max;
}

int compteLettre(char *mots[], int taille, char c) {
    int total = 0;
    for (int i = 0; i < taille; i++) {
        for (int j = 0; mots[i][j] != '\0'; j++) {
            if (mots[i][j] == c) {
                total++;
            }
        }
    }
    return total;
}

void affichageFiltreNbLettre(char *mots[], int taille, int nbLettres) {
    for (int i = 0; i < taille; i++) {
        if ((int)strlen(mots[i]) >= nbLettres) {
            ecrireString(mots[i]);
            ecrireSautDeLigne();
        }
    }
}

int main(void) {
    int carre[3][3] = {
        {6, 7, 2},
        {1, 5, 9},
        {8, 3, 4}
    };

    char *mots[] = {"longtemps", "je", "me", "suis", "leve", "tard"};
    int taille = 6;

    ecrireString("carre magique ? ");
    ecrireInt(magique(carre));
    ecrireSautDeLigne();
    ecrireString("taille max : ");
    ecrireInt(tailleMax(mots, taille));
    ecrireSautDeLigne();
    ecrireString("nombre de e : ");
    ecrireInt(compteLettre(mots, taille, 'e'));
    ecrireSautDeLigne();

    ecrireString("mots de 5 lettres ou plus :");
    ecrireSautDeLigne();
    affichageFiltreNbLettre(mots, taille, 5);
    return 0;
}
