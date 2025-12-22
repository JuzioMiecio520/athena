import { createFileRoute } from '@tanstack/react-router'

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import '@mantine/core/styles.css';
import {useEffect} from "react";
import {ActionIcon, Box, Card, MantineProvider} from '@mantine/core';
import Button from "@/panels/Button.tsx";
import VolumeMeter from "@/panels/VolumeMeter.tsx";

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  useEffect(() => {
    var grid = GridStack.init({column:12, float:true, row:6});
  });

  return (
      <MantineProvider defaultColorScheme="dark">
        <Box>
          <ActionIcon/>
        </Box>
      <div className="App" style={{border: "1px solid red"}}>
        <div className="grid-stack">
          <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content">
              <Card style={{height: "100%"}}>
                sdfdsfdf
              </Card>
            </div>
          </div>
          <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content">
              <Card style={{height: "100%"}}>
                <Button />
              </Card>
            </div>
          </div>
          <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content">
              <Card style={{height: "100%"}}>
                <VolumeMeter />
              </Card>
            </div>
          </div>
        </div>
      </div>
      </MantineProvider>
  );
}
