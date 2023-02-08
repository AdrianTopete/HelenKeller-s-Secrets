(function(window, _) {
    window.myLibraryName = window.myLibraryName || {
      numz: {},
      phyz: {
        /**
         * 
         * @param {object} pointA - any game object on the screen 
         * @param {number} pointA.x - pointA's position relative to the left side of the screen
         * @param {number} pointA.y - pointA's position relative to the top side of the screen
         * @param {object} pointB - any game object on the screen 
         * @param {number} pointB.x - pointB's position relative to the left side of the screen
         * @param {number} pointB.y - pointB's position relative to the top side of the screen
         * @returns {number}
         */
        /* Function to Calculate Distance between two points */
        getDistance(pointA, pointB){

          const
            distanceX = pointB.x - pointA.x,
            distanceY = pointB.y - pointA.y,
            distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            return distance; 
        }

      },
    };
  }(window, window._));