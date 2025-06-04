// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

// defining my function for the button
function getBibleVerse() {
  const apiKey = "YOUR_API_KEY_HERE"
  const bibleId = "de4e12af7f28f599-02"
  const verses = ["JHN.3.16", "PSA.23.1", "ROM.8.28", "MAT.6.33", "PHI.4.13"]
  const randomVerseId = verses[Math.floor(Math.random() * verses.length)]

  try {
    const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/verses/${randomVerseId}`, {
      headers: {
        "api-key": apiKey
      }
    })
    const data = await ersponse.json()
    const content = data.data.content
    const reference = data.data.reference
    document.getElementById("verse").innerHTML = '<strong>${reference}:</strong><br>${content}'
  } catch(error) {
    document.getElementById("verse").innerText = "Oops! Could not load verse."
  }
  // display the answer
  document.getElementById("answer").innerHTML = "<p>The sum of squares of the first " + n + " number is: " + sum + " .</p>"; 
}
