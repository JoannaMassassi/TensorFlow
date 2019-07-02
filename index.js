console.log(  tf.tensor1d([1,2,3]) );
console.log(  tf.tensor([[1.5,2],[3,4]]));
console.log( tf.tensor([[1,2,3,4,5],[2,2]]));



console.log(  tf.scalar(3.14) );
console.log(  tf.tensor(3.14) );



const val = [];
for (i=0; i<30; i++){
    val[i]=Math.random(0,100);
}
tf.tensor3d(val[5,3,6]).print();

