import React from 'react';
import SectionTitle from '../../Components/SectionTitle.jsx/SectionTitle';
import { useForm } from "react-hook-form"
import UseAxiosPublic from '../Shared/AxiosPublic/UseAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`
const AddItem = () => {
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = UseAxiosPublic()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // sent the menu item data to the server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                Swal.fire({
                    title: `${data.name} Added`,
                    icon: "success",
                    draggable: true
                });
                reset()
            }
        }
        console.log(res.data)
    }

    return (
        <div className='ml-15'>
            <SectionTitle subHeading="Whats now" heading='Add New Item'> </SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name*</legend>
                        <input type="text" {...register("name", { required: true })} className="input w-full" placeholder="Type here" />
                    </fieldset>
                    <div className='flex gap-10 items-center'>
                        <div className='w-full'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Category</legend>
                            </fieldset>
                            <select defaultValue="Select Category" className="select select-primary w-full" {...register("category", { required: true })}>
                                <option disabled={true}>Select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className='w-full'>
                            <fieldset className="fieldset w-full">
                                <legend className="fieldset-legend">Price*</legend>
                                <input type="text" {...register("price", { required: true })} className="input w-full" placeholder="Type here" />
                            </fieldset>
                        </div>
                    </div>
                    <legend className="fieldset-legend">Recipe Details**</legend>
                    <textarea className="textarea w-full" {...register("recipe", { required: true })} placeholder="Bio"></textarea>
                    <div>
                        <input type="file" {...register("image")} className="file-input my-2" />
                    </div>
                    <button className='btn btn-accent my-5'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;