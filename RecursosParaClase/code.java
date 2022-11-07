try {
    Retrofit retrofit = new Retrofit.Builder()
            .baseUrl(api.getURL())
            .addConverterFactory((GsonConverterFactory.create()))
            .build();
    ApiService apiService = retrofit.create(ApiService.class);
    Call<Notes[]> call = apiService.getNotes();
    call.enqueue(new Callback<Notes[]>() {
        @Override
        public void onResponse(Call<Notes[]> call, Response<Notes[]> response) {
            if(!response.isSuccessful()){
                Log.d("notes", "onResponse: " + response.code());
                return;
            } else{
                // Obtenemos la respuesta en un array
                Notes[] notes = response.body();

                Log.d("notes", String.valueOf(notes.length));
            }

        }

        @Override
        public void onFailure(Call<Notes[]> call, Throwable t) {
            Log.d("notes", "onFailure: " + t.getMessage());
        }
    });
} catch (Exception e) {
    Log.d("notes", "Catch: " + e.getMessage());
}