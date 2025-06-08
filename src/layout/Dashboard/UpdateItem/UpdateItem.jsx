import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle.jsx/SectionTitle';
import { useLoaderData } from 'react-router-dom';


const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm()
    // const { name, image, category, price, recipe } = useLoaderData()
    const item = useLoaderData()
    console.log(item)

    const onSubmit = (data) => {

    }
    return (
        <div className='ml-15'>
            <SectionTitle subHeading="Whats now" heading='Update'> </SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name*</legend>
                        <input type="text"  {...register("name", { required: true })} className="input w-full" placeholder="Type here" />
                    </fieldset>
                    <div className='flex gap-10 items-center'>
                        <div className='w-full'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Category</legend>
                            </fieldset>
                            <select  className="select select-primary w-full" {...register("category", { required: true })}>
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

export default UpdateItem;