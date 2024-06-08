import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm([]);
const onSubmit = (data, e) => console.log(data, e);
const onError = (errors, e) => console.log(errors, e);


<form onSubmit={handleSubmit(onSubmit, onError)}>
  <TextField
    style={{ width: "400px", marginBottom: "40px" }}
    required
    {...register("waNumber", { required: true })}
    width="600"
    id="outlined-required"
    label="Whatsapp Number"
    defaultValue=""
    name="toWhatsappNumber"
  />
  <Button size="small" type="submit" variant="contained" onClick={handleSubmit}>
    save
  </Button>
</form>;
