module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    user_edit: (logged_in, user_id) => {
      if ( logged_in === user_id) {
          return true
      } else 
      return false
  }
  };
  