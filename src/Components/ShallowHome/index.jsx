import React from "react";
const { useState, useEffect } = React
export default function ShallowHome() {
    useEffect(()=> {
        window.location.href = '/';
    })
}