function animal(input) {
    let animaltype = input[0];

    switch (animaltype) {
        case "dog":
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");


            break;
        default:

            console.log("unknown");


    }
}
animal(["cat"]);
