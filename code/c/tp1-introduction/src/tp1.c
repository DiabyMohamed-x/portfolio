#include "../../lib/inout.h"

void ecritBonjour(void) {
    ecrireString("Bonjour");
    ecrireSautDeLigne();
}

void ecrit3Bonjour(void) {
    ecritBonjour();
    ecritBonjour();
    ecritBonjour();
}

void ecritDeuxInt(int x, int y) {
    ecrireInt(x);
    ecrireString(" ");
    ecrireInt(y);
    ecrireSautDeLigne();
}

void ecritSommeDeuxInt(int x, int y) {
    ecrireInt(x + y);
    ecrireSautDeLigne();
}

void ecritSommeDeuxIntBavard(int x, int y) {
    ecrireString("x = ");
    ecrireInt(x);
    ecrireSautDeLigne();
    ecrireString("y = ");
    ecrireInt(y);
    ecrireSautDeLigne();
    ecrireString("somme = ");
    ecrireInt(x + y);
    ecrireSautDeLigne();
}

void ecritSommeTroisInt(int x, int y, int z) {
    ecrireInt(x + y + z);
    ecrireSautDeLigne();
}

int main(void) {
    ecritBonjour();
    ecrit3Bonjour();
    ecritDeuxInt(4, 7);
    ecritSommeDeuxInt(4, 7);
    ecritSommeDeuxIntBavard(4, 7);
    ecritSommeTroisInt(1, 2, 3);
    return 0;
}
