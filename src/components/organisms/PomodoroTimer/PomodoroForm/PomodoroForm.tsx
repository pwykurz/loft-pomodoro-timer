import {useEffect} from "react"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {useRecoilState} from "recoil"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import PomodoroTimeLocalStorage from "@/lib/initialLocalStorage"
import {dialogState} from "@/storage/DialogState"
import {pomodoroTimesState} from "@/storage/PomodoroTimerState"

const formSchema = z.object({
  workTime: z.coerce.number({
    required_error: "Age is required ",
    invalid_type_error: "Age must be a number",
  }).int(),
  breakTime: z.coerce.number({
    required_error: "Age is required 2",
    invalid_type_error: "Age must be a number 2",
  }).int(),
  longBreakTime: z.coerce.number({
    required_error: "Age is required 3",
    invalid_type_error: "Age must be a number 3",
  })
})
const PomodoroForm = () => {
  const [,setOpen] = useRecoilState(dialogState)
  const [pomodoroTime, setPomodoroTime] = useRecoilState(pomodoroTimesState)

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {...pomodoroTime}
    }
  )

  useEffect(() => form.reset(pomodoroTime), [pomodoroTime])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const pomodoroTimeInstance = new PomodoroTimeLocalStorage
    setPomodoroTime({...values })
    pomodoroTimeInstance.setPomodoroTimeToLocalStorage({...values})
    setOpen(false)
  }

  return (
    <Form {...form}>
      <form className="py-4 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name="workTime" render={({field}) => (
          <FormItem>
            <FormLabel>Work time</FormLabel>
            <FormControl>
              <Input placeholder="add work time" type="number" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="breakTime" render={({field}) => (
          <FormItem>
            <FormLabel>Break time</FormLabel>
            <FormControl>
              <Input placeholder="add work time" type="number" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="longBreakTime" render={({field}) => (
          <FormItem>
            <FormLabel>Break time</FormLabel>
            <FormControl>
              <Input placeholder="add work time" type="number" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <Button className="float-right" type="submit">Save</Button>
      </form>
    </Form>
  )
}

export default PomodoroForm