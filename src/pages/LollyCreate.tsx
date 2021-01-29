import React, { useState } from "react";
import Layout from "../Layout/Layout";
import * as Yup from "yup";

import { Formik, Form, Field } from "formik";
import AllMainLolly from "../component/AllMainLolly";
import Lolly from "../MainLolly/Lolly";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { Link } from "gatsby";
import FinalPage from "../component/FinalPage";
import Template from "../template/template";

const All_lolly = gql`
  {
    allAuthors {
      Toname
      message
      fromName
      falvourTop
      falvourMid
      falvourBtm
      lollyPath
    }
  }
`;
const create_Lolly = gql`
  mutation createLolly(
    $Toname: String!
    $message: String!
    $fromName: String!
    $falvourTop: String!
    $falvourMid: String!
    $falvourBtm: String!
  ) {
    createLolly(
      Toname: $Toname
      message: $message
      fromName: $fromName
      falvourTop: $falvourTop
      falvourMid: $falvourMid
      falvourBtm: $falvourBtm
    ) {
      message
      lollyPath
    }
  }
`;

const SignupSchema = Yup.object().shape({
  To: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  friend: Yup.string().required("Required"),
});

const LollyCreate = () => {
  const [createLolly, { data }] = useMutation(create_Lolly);
  const [topFav, setTop] = useState("#FF004F");
  const [midFav, setMid] = useState("#FF6336");
  const [btmFav, setBtm] = useState("#F4C734");
  return (
    <Layout>
      <div>
        <div className="MainHead">
          <h1 className="myh1">Virtual lolly</h1>
          <p className="myp">
            because we all know someone <br /> who deserves some sugar.
          </p>
        </div>
        {!data ? (
          <div className="MainFormLolly">
            <Lolly
              TopFlavour={topFav}
              MidFlavour={midFav}
              BottomFlavour={btmFav}
            />
            <div className="lollyFlavourDiv">
              <label htmlFor="TopFav" className="colorPickerLabel">
                <input
                  type="color"
                  id="loll"
                  name="TopFav"
                  value={topFav}
                  onChange={(e) => setTop(e.target.value)}
                />
              </label>
              <label htmlFor="MidFav" className="colorPickerLabel">
                <input
                  type="color"
                  name="MidFav"
                  id="loll"
                  value={midFav}
                  onChange={(e) => setMid(e.target.value)}
                />
              </label>
              <label htmlFor="BtmFav" className="colorPickerLabel">
                <input
                  type="color"
                  name="BtmFav"
                  id="loll"
                  value={btmFav}
                  onChange={(e) => setBtm(e.target.value)}
                />
              </label>
            </div>
            <div className="Form">
              <Formik
                initialValues={{
                  To: "",
                  message: "",
                  friend: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values, "favoursAll", topFav, midFav, btmFav);

                  createLolly({
                    variables: {
                      Toname: values.To,
                      message: values.message,
                      fromName: values.friend,
                      falvourTop: topFav,
                      falvourMid: midFav,
                      falvourBtm: btmFav,
                    },
                    refetchQueries: [{ query: All_lolly }],
                  });
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <label>To</label>
                    <br />
                    <Field
                      name="To"
                      placeholder="A lolly for..."
                      className="FormInput"
                      style={{ height: "30px" }}
                    />
                    {errors.To && touched.To ? <div>{errors.To}</div> : null}
                    <br />
                    <label>Say something Nice </label>
                    <br />
                    <Field
                      name="message"
                      as="textarea"
                      rows="15"
                      cols="40"
                      className="FormInput"
                    />
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}

                    <br />
                    <label>From</label>
                    <br />
                    <Field
                      name="friend"
                      type="text"
                      placeholder="from your friend..."
                      className="FormInput"
                      style={{ height: "30px", marginBottom: "25px" }}
                    />
                    {errors.friend && touched.friend ? (
                      <div>{errors.friend}</div>
                    ) : null}
                    <br />
                    <button type="submit" className="glow-on-hover">
                      Freeze this lolly and get the Link
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        ) : (
          <Link to={`/LollyCreate/${data.createLolly.lollyPath}`}>
            <FinalPage
              Toname={data.createLolly.Toname}
              message={data.createLolly.message}
              fromName={data.createLolly.fromName}
              lollyPath={data.createLolly.lollyPath}
            />
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default LollyCreate;
