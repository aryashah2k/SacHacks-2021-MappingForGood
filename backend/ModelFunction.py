import json
import os

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import f1_score
from sklearn.utils import resample
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

current_dir = os.path.dirname(os.path.abspath(__file__))
data_set_path = os.path.join(current_dir, "Modeling_Data_Set.csv")
data = pd.read_csv(data_set_path, header=0) #Possible Modification to Link to database


medIncome = data["MedianFamilyIncome"].mean()
Income_std = data["MedianFamilyIncome"].std()
medWhite = data["TractWhite"].mean()
White_std = data["TractWhite"].std()

X_cols = ["MedianFamilyIncome", "TractWhite"]
y_col = ["FoodDesert"]

# print(type(medWhite))
   

def scaler(input_val):
    scaled = (input_val - medIncome) / Income_std
    return scaled

def scaler_two(input_val):
    scaled2 = (input_val - medWhite) / White_std
    return scaled2

def predictor(input_val, med_white_param): #WILL PROBABLY CHNAGE INPUTS
    dataframe = data
    #Resample
    df_maj = dataframe[dataframe.FoodDesert==0]
    df_min = data[dataframe.FoodDesert==1]

    df_majority_downsampled = resample(df_maj, replace=False, n_samples=13,random_state=0)
    df_downsampled = pd.concat([df_majority_downsampled, df_min])

    #X and y
    X = df_downsampled[X_cols]
    y = df_downsampled[y_col]

    #Scale
    X = (X - X.mean(axis=0)) / X.std(axis=0)

    #model
    model= LogisticRegression()

    model.fit(X,np.ravel(y))

    predictors = {"MedianFamilyIncome":[scaler(input_val)],"TractWhite":[scaler_two(med_white_param)]}
    predictors = pd.DataFrame(data=predictors)

    prediction =  model.predict(predictors)

    if prediction == 1:
        return json.dumps("This is still a food desert!")
    return json.dumps("This is not a food desert!")


# print("prediction: ", predictor(9))
