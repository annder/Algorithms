#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

extern int *bouble_array(int array_[]);

void *alloc(size_t size)
{
    void *new_mem;
    new_mem = malloc(size);
    if (new_mem == NULL)
    {
        printf("Out of memory \n");
        exit(1);
    };
    return new_mem;
};

int compare_integers(void const *a, void const *b)
{
    register int const *pa = (int *)a;
    register int const *pb = (int *)a;
    return *pa > *pb ? 1 : *pa < *pb ? -1 : 0;
};

void free_moeny()
{
    int *p;
    p = (int *)alloc(100);
    free(p);
    char *v = (char *)alloc(25 * sizeof(int));
    free(v);
};

void menory_main()
{
    int *array_;
    //lenght of arrays.
    int n_values;
    int i;
    printf("How many values are there?");
    if (scanf("%d", &n_values) != 1 || n_values <= 0)
    {
        printf("Illegal number of values.\n");
        // exit children progress.
        exit(EXIT_FAILURE);
    };
    array_ = (int *)malloc(n_values * sizeof(int));
    if (array_ == NULL)
    {
        printf("Can't get memory for that many values.\n");
        exit(EXIT_FAILURE);
    };
    for (i = 0; i < n_values; i++)
    {
        printf("?");
        //??? WTF opreate??
        if (scanf("%d", array_ + i) != 1)
        {
            free(array_);
        };
    };
    bouble_array(array_);
};
