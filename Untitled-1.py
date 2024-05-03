import plotly.express as px
import pandas as pd


data = pd.read_csv('Results_21Mar2022.csv')

data['diet_group'] = data['diet_group'].replace({'fish':'Fish Eater',
                                                'meat': 'Medium Meat Eater',
                                                 'meat50': 'Low Meat Eater',
                                                 'meat100': 'High Meat Eater'})

fig = px.scatter_matrix(data,
                        dimensions=['mean_ghgs', 'mean_land', 'mean_watuse', 'mean_eut'],
                        color='diet_group',
                        symbol='diet_group',
                        labels={
                            "mean_ghgs": "GHG Emissions (kg)",
                            "mean_land": "Land Use (sq m)",
                            "mean_watuse": "Water Use (cubic m)",
                            "mean_eut": "Eutrophication (gPO4e)"
                        },
                        title="Environmental Impact by Diet Group")

fig.update_traces(diagonal_visible=False)  
fig.show()