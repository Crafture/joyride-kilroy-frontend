<template>
    <div class="w-screen h-screen bg-black"
        :style="{ 'background-image': 'url(' + artwork + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center' }">
        <div
            class="p-4 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full pt-28">
            <div class="relative w-full max-w-2xl h-full md:h-auto">
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Win een reis naar Azië ter waarde van € 5000!
                        </h3>
                    </div>
                    <div>
                        <div v-if="!success" v-for="(value, key) in errorMessage" :key="key" class="mb-4">
                            <div role="alert">
                                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                    Error in {{ key }}:
                                </div>
                                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                    <p>
                                        {{ value.join(', ') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="success" class="mb-4 flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                            </svg>
                            <p>You have successfully registered!</p>
                        </div>
                    </div>
                    <form @submit="handleSubmit">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            <div class="sm:col-span-2 dark:text-white text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam ab, voluptate autem, officia ullam eos expedita tempora, voluptas minima similique ipsa dolore! Non molestias laboriosam omnis atque numquam corrupti.
                            </div>
                            <div>
                                <label for="first_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Voornaam</label>
                                <input type="text" name="first_name" id="first_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Voornaam" required="">
                            </div>
                            <div>
                                <label for="last_name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Achternaam</label>
                                <input type="text" name="last_name" id="last_name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Achternaam" required="">
                            </div>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                                <input type="text" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="voornaam@provider.nl" required="">
                            </div>
                            <div>
                                <label for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefoon</label>
                                <input type="phone" name="phone" id="price"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="+31612345678" pattern="^\+\d{11}$" required="">
                            </div>
                            <div class="sm:col-span-2">
                                <label for="roadtrip"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Beschrijf je ideale
                                    roadtrip:</label>
                                <textarea id="roadtrip" rows="4" name="roadtrip"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Beschrijf je ideale roadtrip hier"></textarea>
                            </div>
                            <div class="sm:col-span-2 dark:text-white text-sm font-bold">Wie neem je mee op jouw ideale
                                roadtrip?</div>
                            <div>
                                <label for="email_friend1"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail 1</label>
                                <input type="text" name="email_friend1" id="email_friend1"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="voornaam@provider.nl" required="">
                            </div>
                            <div>
                                <label for="email_friend2"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail 2</label>
                                <input type="text" name="email_friend2" id="email_friend2"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="voornaam@provider.nl" required="">
                            </div>

                        </div>
                        <div class="flex justify-between items-center">
                            <button type="submit" class="py-2 px-8 text-white bg-blue-700 rounded-sm">
                                Registreren
                            </button>
                            <img class="h-10" :src="kilroy" />
                        </div>
                    </form>
                </div>
                <div class="flex justify-center items-center">
                    <img class="mt-8 md:mt-16 h-20" :src="joyride" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import artwork from '~/assets/img/artwork.png';
import joyride from '~/assets/img/joyride.png';
import kilroy from '~/assets/img/kilroy.svg';

let success = ref("");
let errorMessage = ref("");
let timerId = ref(null);

const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    fetch('https://joyride-kilroy.crafture.com/api/registrants/', {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            if (!response.ok) {
                throw response;
            }
            return response.json();
        })
        .then((data) => {
            success.value = JSON.stringify(data);
            console.log("success: ", success.value);
        })
        .catch((errorResponse) => {
            errorResponse.json().then((error) => {
                console.error('Error submitting form', error);
                errorMessage.value = error;

                clearTimeout(timerId.value);

                timerId.value = setTimeout(() => {
                    errorMessage.value = "";
                }, 25000);
            });
        });
};
</script>

<style>
html,
body {
    background-color: black;
}</style>