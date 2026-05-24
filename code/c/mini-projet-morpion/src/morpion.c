#include "../../lib/inout.h"

#define BOOL int
#define TRUE 1
#define FALSE 0

void afficheGrille(char grille[]) {
    for (int i = 0; i < 9; i++) {
        ecrireChar(grille[i]);
        if ((i + 1) % 3 == 0) {
            ecrireSautDeLigne();
        }
    }
}

BOOL ligneIdentique(char grille[], int ligne) {
    int depart = ligne * 3;
    return grille[depart] != '_' &&
           grille[depart] == grille[depart + 1] &&
           grille[depart + 1] == grille[depart + 2];
}

BOOL colonneIdentique(char grille[], int col) {
    return grille[col] != '_' &&
           grille[col] == grille[col + 3] &&
           grille[col + 3] == grille[col + 6];
}

BOOL diag1Identique(char grille[]) {
    return grille[0] != '_' && grille[0] == grille[4] && grille[4] == grille[8];
}

BOOL diag2Identique(char grille[]) {
    return grille[2] != '_' && grille[2] == grille[4] && grille[4] == grille[6];
}

BOOL testGagne(char grille[]) {
    for (int i = 0; i < 3; i++) {
        if (ligneIdentique(grille, i) || colonneIdentique(grille, i)) {
            return TRUE;
        }
    }
    return diag1Identique(grille) || diag2Identique(grille);
}

BOOL coupValide(char grille[], int coup) {
    return coup >= 1 && coup <= 9 && grille[coup - 1] == '_';
}

int lireCoupMorpion(char grille[], int joueur) {
    int coup;

    do {
        ecrireString("Joueur ");
        ecrireInt(joueur);
        ecrireString(" ? ");
        coup = lireInt();

        if (!coupValide(grille, coup)) {
            ecrireString("Coup invalide, recommencez.");
            ecrireSautDeLigne();
        }
    } while (!coupValide(grille, coup));

    return coup;
}

int main(void) {
    char grille[] = {'_', '_', '_', '_', '_', '_', '_', '_', '_'};
    int joueur = 1;
    int casesLibres = 9;
    BOOL gagne = FALSE;

    while (!gagne && casesLibres > 0) {
        char symbole = joueur == 1 ? 'x' : 'o';
        int coup;

        afficheGrille(grille);
        coup = lireCoupMorpion(grille, joueur);
        grille[coup - 1] = symbole;
        casesLibres--;

        if (testGagne(grille)) {
            gagne = TRUE;
        } else if (joueur == 1) {
            joueur = 2;
        } else {
            joueur = 1;
        }
    }

    afficheGrille(grille);

    if (gagne) {
        ecrireString("Le joueur ");
        ecrireInt(joueur);
        ecrireString(" a gagne.");
        ecrireSautDeLigne();
    } else {
        ecrireString("Match nul.");
        ecrireSautDeLigne();
    }

    return 0;
}
