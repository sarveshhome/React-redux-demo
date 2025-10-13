import React from 'react';

const withLoading = (Component) => {
  return function WithLoadingComponent({ loading, ...props }) {
    if (loading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};

export default withLoading;
