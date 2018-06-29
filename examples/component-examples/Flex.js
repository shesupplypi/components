import React from 'react'
import { PropsForm } from '@compositor/kit'
import { FlexContainer, FlexItem, Block, Text, theme } from  '../../src'
import ExampleHeading from '../doc-components/ExampleHeading'

const propObj = {
  wrap: ['wrap', 'nowrap'],
  direction: ['row', 'row-reverse', 'column'],
  justifyContent: ['start', 'end', 'center', 'between', 'around'],
  alignItems: ['start', 'end', 'center', 'baseline', 'stretch'],
  alignContent: ['start', 'end', 'center', 'between', 'around', 'stretch'],
}

const FlexExample = {
  name: 'Flex',
  element: (
    <Block p={2}>
        <ExampleHeading mt={2}>FlexContainer</ExampleHeading>
        <PropsForm>
          <FlexContainer
            wrap='wrap'
            direction='row'
            justifyContent='start'
            alignItems='start'
            alignContent='start'
            flexAuto={true}
            alignSelf='start'
            width={300}
            height={300}
            border={true}
          >
            <Block p={3} bg='blue'>Item 1</Block>
            <Block p={3} bg='green'>Item 2</Block>
            <Block p={3} bg='yellow'>Item 3</Block>
            <Block p={3} bg='red'>Item 4</Block>
            <Block p={3} bg='purple'>Item 5</Block>
          </FlexContainer>
          {Object.keys(propObj).map(key =>
            <PropsForm.Select name={key}>
              {propObj[key].map((value, i) => (
                <option>{value}</option>))}
            </PropsForm.Select>
          )}
        </PropsForm>
        <ExampleHeading mt={2}>FlexContainer + FlexItems set to flexAuto</ExampleHeading>
        <FlexContainer wrap='nowrap' width={300} height={300} border={true}>
          <FlexItem flexAuto>
            <Block p={3} bg='blue'>Item 1</Block>
          </FlexItem>
          <FlexItem flexAuto>
            <Block p={3} bg='green'>Item 2</Block>
          </FlexItem>
          <FlexItem flexAuto>
            <Block p={3} bg='yellow'>Item 3</Block>
          </FlexItem>
        </FlexContainer>
        <ExampleHeading mt={2}>FlexContainer + FlexItems with first item set to alignSelf='center'</ExampleHeading>
        <FlexContainer wrap='nowrap' width={300} height={300} border={true}>
          <FlexItem alignSelf='center'>
            <Block p={3} bg='blue'>Item 1</Block>
          </FlexItem>
          <FlexItem>
            <Block p={3} bg='green'>Item 2</Block>
          </FlexItem>
          <FlexItem>
            <Block p={3} bg='yellow'>Item 3</Block>
          </FlexItem>
        </FlexContainer>
        <ExampleHeading mt={2}>FlexContainer + FlexItems using tag prop set to  "p"</ExampleHeading>
        <FlexContainer wrap='nowrap' width={300} height={300} border={true}>
          <FlexItem tag="p">
            <Block p={3} bg='blue'>Item 1</Block>
          </FlexItem>
          <FlexItem tag="p">
            <Block p={3} bg='green'>Item 2</Block>
          </FlexItem>
          <FlexItem tag="p">
            <Block p={3} bg='yellow'>Item 3</Block>
          </FlexItem>
        </FlexContainer>
    </Block>
  )
}

export default FlexExample