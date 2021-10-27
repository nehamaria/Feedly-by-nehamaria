import React from 'react'

const removeSpecialCharaters = (str) => str.replace(/[^\w\s]/gi, "");

export default removeSpecialCharaters; 
