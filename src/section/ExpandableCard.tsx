import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { MotionDialogTitle, MotionInput } from "@/components/MotionUi/Comp";
import IconSearch from "@/components/icon/SearchIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  searchCode: z
    .string({ message: "Please enter the Shared Code!!!" })
    .trim()
    .min(3, { message: "invalid - re-check the shared code!!!" })
    .max(20, { message: "invalid Shared code length" }),
});

export function ExpandableCardDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchCode: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Dialog>
      <AnimatePresence>
        <DialogTrigger asChild>
          <motion.div
            layoutId="code-search-input-wrap"
            className="relative mx-auto ml-auto max-w-[16rem] flex-1 md:grow-0"
          >
            <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <MotionInput
              placeholder="Search Code"
              readOnly
              autoComplete="off"
              className="w-full rounded-lg bg-background pl-8"
            />
          </motion.div>
        </DialogTrigger>
      </AnimatePresence>
      <AnimatePresence>
        <DialogContent className="top-[10%] w-[92dvw] translate-y-0 rounded-md data-[state=closed]:duration-0 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-3/4 data-[state=open]:slide-in-from-bottom-1/4 sm:max-w-[425px]">
          <DialogHeader>
            <MotionDialogTitle layoutId="code-seard-card-title">
              Search Files or Text
            </MotionDialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="searchCode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div
                        layoutId="code-search-input-wrap"
                        className="relative ml-auto flex-1 md:grow-0"
                      >
                        <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <MotionInput
                          placeholder="Search Code"
                          autoFocus
                          autoComplete="off"
                          {...field}
                          className="w-full rounded-lg bg-background pl-8"
                        />
                      </motion.div>
                    </FormControl>
                    <FormDescription>
                      Enter the sender code (e.g.'345678') to search for
                      files/text shared by that sender.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="gap-y-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Search</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </AnimatePresence>
    </Dialog>
  );
}
