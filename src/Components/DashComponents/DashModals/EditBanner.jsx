import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBanner } from '../../../redux/actions/banner'; 

function EditBanner({ closeEditBannerModal, bannerData }) {
    const [formData, setFormData] = useState({
        content: bannerData.content,
        buttonText: bannerData.buttonText,
        link: bannerData.link,
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await dispatch(updateBanner(bannerData.banner_id, formData));
            closeEditBannerModal();
        } catch (error) {
            console.error("Error updating banner:", error);
        }
    };

    return (
        <div className='font-lateef w-[32rem]'>
            <p className="text-book text-3xl text-center underline my-5">Middle Banner</p>
            <div className="text-center">
                <form className="py-4" onSubmit={handleSubmit}>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            name="content"
                            placeholder="Text"
                            value={formData.content}
                            onChange={handleChange}
                            className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black w-full"
                        />
                    </div>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            name="buttonText"
                            placeholder="Button text"
                            value={formData.buttonText}
                            onChange={handleChange}
                            className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black uppercase w-full"
                        />
                    </div>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            name="link"
                            placeholder="Link"
                            value={formData.link}
                            onChange={handleChange}
                            className="flex-1 px-4 py-2 bg-gray-100 focus:outline-none text-xl text-black"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className="text-book border border-book px-4 py-2 hover:bg-book hover:text-white text-xl">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditBanner;
