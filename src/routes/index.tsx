import { createFileRoute } from '@tanstack/react-router'

import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import '@mantine/core/styles.css';
import {createRef, useEffect, useRef, useState} from "react";
import {ActionIcon, Box, Card, MantineProvider} from '@mantine/core';
import Button from "@/panels/Button.tsx";
import VolumeMeter from "@/panels/VolumeMeter.tsx";
import useGrid from "@/components/Grid.tsx";

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const grid = useGrid();

  return (
      <MantineProvider defaultColorScheme="dark">
        <Box>
          <ActionIcon onClick={() => {
              grid.addItem({ panel: "internal/Button", panelOptions: {} });
          }}/>
        </Box>

        <grid.Grid />
      </MantineProvider>
  );
}
