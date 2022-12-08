import React, { useState } from 'react'
import { Fullpageloader } from './Fullpageloader';

export const useFullpageloader = () => {
    const [loading,setLoading] =useState(false);
  return[
    loading ? <Fullpageloader/>:null,
    () =>setLoading(true),//Show loader
    () =>setLoading(false)//Hide loader
  ];
}
