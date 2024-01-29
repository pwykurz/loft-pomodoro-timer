'use client'
import { type FC, useEffect} from "react"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {useRecoilState} from "recoil"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {CoffeeCupIcon, FocusIcon, LunchIcon} from "@/components/ui/icons"
import {Input} from "@/components/ui/input"
import PomodoroTimeLocalStorage from "@/lib/initialLocalStorage"
import {cn} from "@/lib/utils"
import {dialogState} from "@/storage/DialogState"
import {pomodoroTimesState} from "@/storage/PomodoroTimerState"

import styles from './PomodoroForm.module.scss'

const formSchema = z.object({
  workTime: z.coerce.number({
    required_error: "Work time is required ",
  }).int().gte(1),
  breakTime: z.coerce.number({
    required_error: "Break time is required",
  }).int().gte(1),
  longBreakTime: z.coerce.number({
    required_error: "Long break time is required",
  }).int().gte(1),
  isBreak: z.boolean(),
  breakAutostart: z.boolean()
}).required()

const PomodoroForm:FC = () => {
  const [,setOpen] = useRecoilState(dialogState)
  const [pomodoroTime, setPomodoroTime] = useRecoilState(pomodoroTimesState)

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {...pomodoroTime}
    }
  )

  useEffect(() => form.reset(pomodoroTime), [pomodoroTime])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const _values = {
      ...values,
      // TODO: add feature to recognize that is break
      // isBreak: pomodoroTime.isBreak
      isBreak: false,
      breakAutostart: pomodoroTime.breakAutostart
    }

    PomodoroTimeLocalStorage.setPomodoroTimeToLocalStorage({..._values})
    setPomodoroTime({..._values})
    setOpen(false)
  }

  return (
    <Form {...form} >
      <form className="py-4 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name="workTime" render={({field}) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2"><FocusIcon width={25} /> Work time *</FormLabel>
            <FormControl>
              <Input placeholder="Add work time" type="number" {...field} />
            </FormControl>
            <FormDescription className={styles.description}>This is the time when you will be as focused as possible.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="breakTime" render={({field}) => (
          <FormItem>
            <FormLabel className="flex items-end gap-2"><CoffeeCupIcon width={25} /> Break time *</FormLabel>
            <FormControl>
              <Input placeholder="Add break time" type="number" {...field} />
            </FormControl>
            <FormDescription className={styles.description}>
              This is the time for a break. Step away from the computer.
              <br />REALLY GO AWAY!
            </FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="longBreakTime" render={({field}) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2"><LunchIcon width={25} /> Long break time *</FormLabel>
            <FormControl>
              <Input placeholder="Add long break" type="number" {...field} />
            </FormControl>
            <FormDescription className={styles.description}>This is a long break for lunch, for example.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        {/* TODO: polishing this option*/}
        {/*<FormField control={form.control} name="breakAutostart" render={({field}) => (*/}
        {/*  <FormItem className="flex items-end gap-2">*/}
        {/*    <FormControl>*/}
        {/*      <Checkbox*/}
        {/*        checked={field.value}*/}
        {/*        className={styles.checkbox}*/}
        {/*        onCheckedChange={field.onChange}*/}
        {/*      />*/}
        {/*    </FormControl>*/}
        {/*    <FormLabel className={cn(styles.label, "cursor-pointer")}>*/}
        {/*      Enable automatic start time for breaks*/}
        {/*    </FormLabel>*/}
        {/*  </FormItem>*/}
        {/*)}/>*/}
        <Button className={cn(styles.button, "float-right")} type="submit">Save</Button>
      </form>
    </Form>
  )
}

export default PomodoroForm
