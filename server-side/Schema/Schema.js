const express = require('express')
const mongoose = require('mongoose');


const authenticationSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,
    }
)
const authenticationModel = mongoose.model("people",authenticationSchema);

module.exports = authenticationModel;