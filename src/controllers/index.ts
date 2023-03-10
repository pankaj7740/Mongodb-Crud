import express,{ Request, Response } from "express";
import { getProducts, getProductByID, createProduct, updateProductByID, deleteProductByID } from "../services/index"
import { ObjectId } from "mongodb";
export const router = express()


router.get("/",async (request: Request, response: Response) => {
    try {
        const products = await getProducts();
        response.status(200).send(products);
    } catch (error) {
        response.status(500).send({
            error: "something error"
        })
    }
})


router.get("/:id", async (request: Request, response: Response) => {
    try {
        if (ObjectId.isValid(request.params.id)) {
            const id = request.params.id;
            const product = await getProductByID(id)
            response.status(200).send({
                
            })
        } else {
            response.status(404).send({
                message: "Not a valid id"
            })
        }
    } catch (err) {
        response.status(404).send({
            err: "could not find the data of that id"
        })
    }
})


router.post("/",async (request: Request, response: Response) => {
    const productData = request.body
    const result = await createProduct(productData);
    if (result) {
        response.status(201).send(result);
    } else {
        response.status(404).send({
            message: "could not inserted data"
        })
    }
})


router.put("/:id",async (request: Request, response: Response) => {
    try {
        if (ObjectId.isValid(request.params.id)) {
            const updatedData = request.body;
            const id = request.params.id;
            const result = await updateProductByID(id, updatedData);
            response.status(201).send(result);
            
        } else {
            response.status(404).send({
                message: "Id is not valid"
            })
        }
    } catch (err) {
        response.status(404).send({
            err: `could not be updated ${err}`
        })
    }
})


router.delete("/id:",async (request: Request, response: Response) => {
    try {
        if (ObjectId.isValid(request.params.id)) {
            const id = request.params.id;
            const deletedData = await deleteProductByID(id);
            console.log(deletedData)
            response.status(200).send(deletedData);
        } else {
            response.status(404).send({
                message: `Cannot be removed product id is not valid`
            })
        }
    } catch (error) {
        response.status(404).send({
            error: `something fault data is not removed ${error}`
        })
    }
})