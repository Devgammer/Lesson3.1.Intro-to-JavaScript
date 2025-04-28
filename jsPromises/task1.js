function delayTimeout(text, sec) {
    setTimeout(() => {
        console.log(text);
      }, sec);
    }

delayTimeout('Finish program', 4000);