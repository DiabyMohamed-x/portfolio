#include "../../lib/inout.h"

#define BOOL int
#define TRUE 1
#define FALSE 0

int sommeTroisInt(int x, int y, int z) {
    return x + y + z;
}

int max2(int x, int y) {
    if (x >= y) {
        return x;
    }
    return y;
}

int max3(int x, int y, int z) {
    return max2(max2(x, y), z);
}

int plusSommeProd(int x, int y) {
    int somme = x + y;
    int produit = x * y;
    return max2(somme, produit);
}

BOOL testPlusGrandEq(int x, int y) {
    return x >= y;
}

BOOL testPlusPetit(int x, int y) {
    return x < y;
}

BOOL testTrie3(int x, int y, int z) {
    return x <= y && y <= z;
}

BOOL testDeuxEgaux(int x, int y, int z, int t) {
    return x == y || x == z || x == t || y == z || y == t || z == t;
}

void afficheResultatTest(char *nom, BOOL resultat) {
    ecrireString(nom);
    ecrireString(" : ");
    if (resultat) {
        ecrireString("TRUE");
    } else {
        ecrireString("FALSE");
    }
    ecrireSautDeLigne();
}

int main(void) {
    ecrireString("sommeTroisInt(1, 2, 3) = ");
    ecrireInt(sommeTroisInt(1, 2, 3));
    ecrireSautDeLigne();
    ecrireString("max2(12, 8) = ");
    ecrireInt(max2(12, 8));
    ecrireSautDeLigne();
    ecrireString("max3(12, 8, 20) = ");
    ecrireInt(max3(12, 8, 20));
    ecrireSautDeLigne();
    ecrireString("plusSommeProd(4, 5) = ");
    ecrireInt(plusSommeProd(4, 5));
    ecrireSautDeLigne();

    afficheResultatTest("testPlusGrandEq(10, 8)", testPlusGrandEq(10, 8));
    afficheResultatTest("testPlusPetit(3, 7)", testPlusPetit(3, 7));
    afficheResultatTest("testTrie3(1, 2, 2)", testTrie3(1, 2, 2));
    afficheResultatTest("testDeuxEgaux(1, 5, 3, 5)", testDeuxEgaux(1, 5, 3, 5));
    return 0;
}
