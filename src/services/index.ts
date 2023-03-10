import { rejects } from "assert";
import mongoDb from "mongodb";
import { ObjectId } from "mongodb";
import { resolve } from "path";


export const collections: { products?: mongoDb.Collection } = {}




export const getProducts = ()=>{
    return new Promise((resolve,rejects)=>{
        collections.products?.find({}).toArray()
        .then(resolve)
        .catch(rejects)
        // collections.products?.aggregate([{$match:{}}]).toArray();
        
    })
}

export const getProductByID = (id:string)=>{
    return new Promise((resolve,rejects)=>{
        collections.products?.findOne({ _id: new ObjectId(id) })
        .then(resolve)
        .catch(rejects)
    })

}

export const createProduct = (productsBody:any)=>{
    return new Promise((resolve,rejects)=>{
        collections.products?.insertOne(productsBody)
        .then(resolve)
        .catch(rejects)
    })
}

export const updateProductByID = (id: string, data: any)=>{
    return new Promise((resolve,rejects)=>{
        collections.products?.updateOne({ _id: new ObjectId(id) }, { $set: data })
        .then(resolve)
        .catch(rejects)  
         })
}

export const deleteProductByID = (id:string)=>{
    return new Promise((resolve,rejects)=>{
        collections.products?.deleteOne({ _id: new ObjectId(id) })
        .then(resolve)
        .catch(rejects)
    })
}



