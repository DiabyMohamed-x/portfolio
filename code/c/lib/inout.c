#include "inout.h"

#include <stdio.h>

int lireInt(void) {
    int valeur;
    scanf("%d", &valeur);
    return valeur;
}

char lireChar(void) {
    char valeur;
    scanf(" %c", &valeur);
    return valeur;
}

void ecrireInt(int valeur) {
    printf("%d", valeur);
}

void ecrireDouble(double valeur) {
    printf("%.2f", valeur);
}

void ecrireChar(char valeur) {
    printf("%c", valeur);
}

void ecrireString(char *texte) {
    printf("%s", texte);
}

void ecrireSautDeLigne(void) {
    printf("\n");
}

void ecriresautDeLigne(void) {
    ecrireSautDeLigne();
}
