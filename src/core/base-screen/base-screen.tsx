import React, { type ReactElement } from 'react'
import {
  ChildrenScrollView,
  ChildrenWrapper,
  MainWrapper
} from './base-screen.styles'
import ScreenHeader, {
  type PropsHeader
} from './components/screen-header/screen-header'

interface Props {
  children: React.ReactNode
  hasScrollView?: boolean
  hideHeader?: boolean
  headerProps: PropsHeader
}

export default function BaseScreen ({
  children,
  hasScrollView = true,
  hideHeader = false,
  headerProps
}: Props): ReactElement {
  const renderHeader = () => {
    if (!hideHeader) {
      return (
        <ScreenHeader
          title={headerProps.title}
          showTrailingIcon={headerProps.showTrailingIcon}
          showLeadingIcon={headerProps.showLeadingIcon}
          leadingIcon={headerProps.leadingIcon}
          trailingIcon={headerProps.trailingIcon}
          onPressLeadingIcon={headerProps.onPressLeadingIcon}
          onPressTrailingIcon={headerProps.onPressTrailingIcon}
        />
      )
    }
  }

  return (
    <MainWrapper>
      {renderHeader()}
      <ChildrenScrollView scrollEnabled={hasScrollView}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ChildrenScrollView>
    </MainWrapper>
  )
}
