const blog=require('./Models/blog');

const com=[{
    title:"Cats",
    image:"https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    desc:"Cats are active carnivores, meaning that in the wild they hunt live prey. Their main prey is small mammals (like mice). They will also stalk, and sometimes kill and eat, birds."
    },
    {
        title:"Dogs",
        image:"https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"Dogs (Canis lupus familiaris) are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated."
        },
        {
        title:"Snake",
        image:"https://images.unsplash.com/photo-1529978515127-dba8c80bbf05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNuYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc:"Snake, (suborder Serpentes), also called serpent, any of more than 3,400 species of reptiles distinguished by their limbless condition and greatly elongated body and tail."
        },
        {
            title:"Rabbit",
            image:"https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFiYml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc:"Rabbits are small, furry mammals with long ears, short fluffy tails, and strong, large hind legs. They have 2 pairs of sharp incisors (front teeth), one pair on top and one pair on the bottom."
            
         },
         {
            title:"Lion",
            image:"https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc:"Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey. Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black."
            
         }];


         const seedDb= async()=>{
            await blog.insertMany(com)
            .then(()=>{
                console.log("Data Seeded Succesfully");
            })
            .catch((err)=>{
                console.log("Seed Failed");
                console.log(err);
            })
         }

         module.exports=seedDb;


         

    